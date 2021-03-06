export default {
    "type": "document",
    "name": "docs",
    "title": "Documentation Pages",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the page, used both as a page title and as a navigation menu title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "number",
            "name": "weight",
            "title": "Weight",
            "description": "The navigation order of the documentation page. This value is ignored for parent section pages.",
            "validation": Rule => Rule.integer()
        },
        {
            "type": "string",
            "name": "excerpt",
            "title": "Excerpt",
            "description": "Short description of the documentation section. Displayed in documentation overview section.",
            "validation": null
        },
        {
            "type": "stackbit_page_meta",
            "name": "seo",
            "title": "Seo",
            "validation": null
        },
        {
            "type": "string",
            "name": "layout",
            "title": "Layout",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "docs"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "URL Path",
            "description": "The URL path of this page relative to site root. For example, the site root page would be \"/\", and post page would be \"posts/new-post/\"",
            "validation": Rule => Rule.required()
        },
        {
            "type": "markdown",
            "name": "content",
            "title": "Content",
            "description": "Page content",
            "validation": null
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "page"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}