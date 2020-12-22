---
layout: container
title: "Folder structure."
permalink: "/internal/folder-structure"
---

<button class = "uk-button uk-button-default" type = "button"><a href = "freethedataproject.com/internal">Return to the Official Internal Information Hub™</a></button>

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
<td>Every page on the site lives in here. There are subfolders for each type of content (articles, tutorials, etc.). The <a href = "{{site.baseurl}}/internal/writing-content" target="_blank">writing content</a> guide explains how to format/save posts so they show up on the site.</td>
</tr>

<tr>
<td><span uk-icon="icon: folder"></span> </td>
<td>_data</td>
<td>Sitewide data (i.e., stuff that doesn't belong to an article or tutorial, like our resources CSV, information about the team, etc.) lives here. Typically JSON or CSV format.</td>
</tr>

<tr>
<td><span uk-icon="icon: folder"></span> </td>
<td>_includes</td>
<td>HTML components, i.e. sections of pages that are re-used across the site. Includes are a shortcut for copying and pasting the same chunks of HTML over and over (e.g., navbars, footers, comment sections, sidebars, etc.). </td>
</tr>

<tr>
<td><span uk-icon="icon: folder"></span> </td>
<td>_layouts</td>
<td>HTML templates, i.e. instructions on how to format full-blown pages. Currently, we have templates for articles, tutorials, and unspecified/general content.</td>
</tr>

<tr>
<td><span uk-icon="icon: folder"></span> </td>
<td>assets</td>
<td>Sitewide CSS and JavaScript files live here.</td>
</tr>

<tr>
<td><span uk-icon="icon: folder"></span> </td>
<td>media</td>
<td>Sitewide media lives here: images, SVGs, videos, gifs, etc. </td>
</tr>

<tr>
<td><span uk-icon="icon: folder"></span> </td>
<td>project_materials</td>
<td>This folder is for assets/media that belong to individual articles/tutorials, rather than stuff that's (re-used) across multiple pages on the site. I'm not sure if this is the perfect solution for organizing our projects' files, but it's a starting point. For a given post, pls create a subfolder here. Within your post's subfolder, you have free reign over how you name/organize your materials. My hope is that this system will make our project materials easily navigable/accessible to everyone on the team, without being too cumbersome or restrictive to use when developing posts. But we can revisit if it doesn't work out.</td>
</tr>

<tr>
<td><span uk-icon="icon: file-text"></span> </td>
<td>config.yml</td>
<td>This holds Essential Information™ about our site, such as its URL and the names of the Jekyll packages that are used. Literally everything will break if you make a change that the file doesn't like, so pls proceed with caution when editing the file.</td>
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
<td>Jekyll takes the Gemfile and turns it into whatever this thing is; it can be ignored. All edits we make are to the Gemfile above.</td>
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
