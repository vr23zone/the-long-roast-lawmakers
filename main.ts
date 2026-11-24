import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The senator demanding a licence for every AI model in America just learned his 400-page bill was still a .docx, and the only person in the building who could turn it into a PDF was the aide his bill would put out of work.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
