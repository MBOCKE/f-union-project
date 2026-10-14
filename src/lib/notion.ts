import { Client } from '@notionhq/client';
import type { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

const NOTION_TOKEN = process.env.NOTION_TOKEN;

export const notion = new Client({
  auth: NOTION_TOKEN,
});

export const NOTION_PAGE_ID = process.env.NOTION_PAGE_ID;
export const NOTION_PROGRAMME_PAGE_ID = process.env.NOTION_PAGE_ID2;

export interface CommuniqueContent {
  header: string;
  paragraphs: string[];
  hasPdf: boolean;
}

const getHeadingText = (block: BlockObjectResponse): string | null => {
  switch (block.type) {
    case 'heading_1':
      return block.heading_1.rich_text.map((text) => text.plain_text).join('');
    case 'heading_2':
      return block.heading_2.rich_text.map((text) => text.plain_text).join('');
    case 'heading_3':
      return block.heading_3.rich_text.map((text) => text.plain_text).join('');
    default:
      return null;
  }
};

export async function getCommuniqueContent(): Promise<CommuniqueContent> {
  if (!NOTION_PAGE_ID) {
    console.error("Missing NOTION_PAGE_ID");
    return { header: 'Communiqué de Presse F-UNION AFRICA 2026', paragraphs: ['Content missing. Setup Notion integration.'], hasPdf: false };
  }

  try {
    const response = await notion.blocks.children.list({
      block_id: NOTION_PAGE_ID,
    });

    const blocks = response.results as BlockObjectResponse[];

    let header = 'Communiqué de Presse';
    const paragraphs: string[] = [];
    let hasPdf = false;

    for (const block of blocks) {
      if (block.type === 'heading_1' || block.type === 'heading_2' || block.type === 'heading_3') {
        const text = getHeadingText(block);
        if (text && header === 'Communiqué de Presse') {
          header = text;
        }
      } else if (block.type === 'paragraph') {
        const textArr = block.paragraph.rich_text;
        if (textArr && textArr.length > 0) {
          paragraphs.push(textArr.map((text) => text.plain_text).join(''));
        }
      } else if (block.type === 'file') {
        const url = block.file.type === 'file' ? block.file.file.url : block.file.external.url;
        if (url) hasPdf = true;
      } else if (block.type === 'pdf') {
        const url = block.pdf.type === 'file' ? block.pdf.file.url : block.pdf.external.url;
        if (url) hasPdf = true;
      }
    }

    // Default text if empty
    if (paragraphs.length === 0) {
      paragraphs.push("La visibilité comme levier de transformation économique.");
    }

    return {
      header,
      paragraphs,
      hasPdf
    };
  } catch (error) {
    console.error("Error fetching from Notion:", error);
    return { header: 'Communiqué de Presse F-UNION AFRICA 2026', paragraphs: ['Failed to load content.'], hasPdf: false };
  }
}

// Separate function to get the PDF URLs and filenames when requested
export async function getNotionPdfUrls(): Promise<{ url: string; name: string }[]> {
  if (!NOTION_PAGE_ID) return [];

  try {
    const response = await notion.blocks.children.list({
      block_id: NOTION_PAGE_ID,
    });

    const blocks = response.results as BlockObjectResponse[];
    const pdfs: { url: string; name: string }[] = [];

    for (const block of blocks) {
      if (block.type === 'file') {
        const url = block.file.type === 'file' ? block.file.file.url : block.file.external.url;
        const name = block.file.name || `document-${pdfs.length + 1}.pdf`;
        if (url) pdfs.push({ url, name });
      } else if (block.type === 'pdf') {
        const url = block.pdf.type === 'file' ? block.pdf.file.url : block.pdf.external.url;
        const name = `communique-${pdfs.length + 1}.pdf`;
        if (url) pdfs.push({ url, name });
      }
    }
    return pdfs;
  } catch (error) {
    console.error("Error fetching PDFs from Notion:", error);
    return [];
  }
}

export async function getProgrammePdfUrls(): Promise<{ url: string; name: string }[]> {
  if (!NOTION_PROGRAMME_PAGE_ID) return [];

  try {
    const response = await notion.blocks.children.list({
      block_id: NOTION_PROGRAMME_PAGE_ID,
    });

    const blocks = response.results as BlockObjectResponse[];
    const pdfs: { url: string; name: string }[] = [];

    for (const block of blocks) {
      if (block.type === 'file') {
        const url = block.file.type === 'file' ? block.file.file.url : block.file.external.url;
        const name = block.file.name || `programme-jour-${pdfs.length + 1}.pdf`;
        if (url) pdfs.push({ url, name });
      } else if (block.type === 'pdf') {
        const url = block.pdf.type === 'file' ? block.pdf.file.url : block.pdf.external.url;
        const name = `programme-jour-${pdfs.length + 1}.pdf`;
        if (url) pdfs.push({ url, name });
      }
    }
    return pdfs;
  } catch (error) {
    console.error("Error fetching Programme PDFs from Notion:", error);
    return [];
  }
}
