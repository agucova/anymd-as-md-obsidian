import { Plugin } from 'obsidian';

export default class AnyMdAsMdPlugin extends Plugin {
  async onload() {
    super.onload();

    // register the view and extensions
    this.registerExtensions(["qmd"], "markdown");
    this.registerExtensions(["rmd"], "markdown");
  }
}
