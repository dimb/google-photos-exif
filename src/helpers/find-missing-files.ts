import { existsSync } from 'fs';
import { findFilesWithExtensionRecursively } from './find-files-with-extension-recursively';

export async function findMissingFiles(inputDir: string): Promise<[]> {
  const jsonFiles = await findFilesWithExtensionRecursively(inputDir, ['.json']);
  for (const jsonFile of jsonFiles) {
    let jsonFileArr = jsonFile.split('/');
    jsonFileArr[jsonFileArr.length - 1] = jsonFileArr[jsonFileArr.length - 1].replace('.json', '');
    let fileName = jsonFileArr.join('/');
    if (!existsSync(fileName)) {
      console.log(fileName);
    }
  }
  return [];
}
