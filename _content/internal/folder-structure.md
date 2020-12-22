---
layout: container
title: "Folder structure."
permalink: "/internal/folder-structure"
---

The <a href = "https://github.com/freethedataproject/freethedataproject.github.io" target = "_blank">main page of our Github repository</a> is called the **root** directory. Here's what's in the root directory as of 22 December 2020: 

<table class="uk-table uk-table-middle uk-table-striped uk-table-small ">
<thead>
<tr>
<th>Type</th>
<th>Name</th>
<th>Description</th>
</tr>
</thead>

<tr>
<td><span uk-icon="icon: folder"></span> </td>
<td>_content</td>
<td>Every page on the site lives in here. There are subfolders for each type of content (articles, tutorials, etc.). </td>
</tr>

<tr>
<td><span uk-icon="icon: folder"></span> </td>
<td>_data</td>
<td>Sitewide data (i.e., stuff that doesn't belong to an article or tutorial, like our resources CSV, information about the team, etc.) lives here. Typically JSON or CSV format.</td>
</tr>

<tr>
<td><span uk-icon="icon: folder"></span> </td>
<td>_includes</td>
<td>These are HTML components: not full-blown pages, but *sections* of pages that are re-used across the site. They're a shortcut for copying and pasting. Our navbar and fotoer, for example, live here. </td>
</tr>

<tr>
<td><span uk-icon="icon: folder"></span> </td>
<td>_layouts</td>
<td>These are HTML templates: instruction manuals, basically, on how to format specific types of pages, such as articles and tutorials. Unlike _includes, layouts are used to create full-blown pages.</td>
</tr>

<tr>
<td><span uk-icon="icon: folder"></span> </td>
<td>assets</td>
<td>This is where the site's CSS and JavaScript files live. If you're using a CSS/JS file only for a single post, rather than sitewide, don't use this folder! Instead, create a subfolder for your post in 'project_materials' and save your CSS/JS there!</td>
</tr>

<tr>
<td><span uk-icon="icon: folder"></span> </td>
<td>media</td>
<td>This is where images, SVGs, videos, gifs, and any/all other visual media live. Same deal as 'assets' — if you're using media in a single post, rather than sitewide, don't use this folder. Instead, create a subfolder for your post in 'project_materials' and save your media there! </td>
</tr>

<tr>
<td><span uk-icon="icon: folder"></span> </td>
<td>project_materials</td>
<td>I'm not sure if this is the perfect solution for organizing our projects' files, but it's a starting point. My thought is that each post will get its own subfolder, and from there, the post's author has free reign over how they name/organize their materials. Makes it navigable/accessible to everyone, hopefully without being too cumbersome or restrictive.</td>
</tr>

<tr>
<td><span uk-icon="icon: file-text"></span> </td>
<td>config.yml</td>
<td>This holds Essential Information™ about our site, such as its URL and the names of the Jekyll packages that are used. There's also some less essential stuff, like our site's description. Literally everything will break if you make a change that the file doesn't like, so pls proceed with caution when editing the file.</td>
</tr>

<tr>
<td><span uk-icon="icon: file-text"></span> </td>
<td>.gitignore</td>
<td>A very well-named file. Completely ignorable.</td>
</tr>

<tr>
<td><span uk-icon="icon: file-text"></span> </td>
<td>404.html</td>
<td>Our 404 page. IDK why it lives in our root directory, but it was there when I started, and I'm scared to move it.</td>
</tr>

<tr>
<td><span uk-icon="icon: file-text"></span> </td>
<td>CNAME</td>
<td>This is 50% of why we can use a custom domain name. Github made it for us, and we can ignore it.</td>
</tr>

<tr>
<td><span uk-icon="icon: file-text"></span> </td>
<td>Gemfile</td>
<td>A file Jekyll uses to store information about packages etc. that are used on the site. You can ignore this unless you're planning on doing local server development. </td>
</tr>

<tr>
<td><span uk-icon="icon: file-text"></span> </td>
<td>Gemfile.lock</td>
<td>Jekyll takes the Gemfile and turns it into whatever this thing is; I think it's the "official" version that Github reads to make the site? Regardless, it can be ignored; all edits we make are to the Gemfile above.</td>
</tr>

<tr>
<td><span uk-icon="icon: file-text"></span> </td>
<td>index.html</td>
<td> Our homepage!!! :D </td>
</tr>

<tr>
<td><span uk-icon="icon: file-text"></span> </td>
<td>README.md</td>
<td>This is required to use GH pages. It's what appears on the repository's home page, underneath all the folders. </td>
</tr>


</table>
