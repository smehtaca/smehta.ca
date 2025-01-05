export const SITE_URL = 'https://smehtaca.netlify.app';
export const APPROVED_POSTERS_GH_USERNAME = ['smehtaca'];
export const GH_USER_REPO = 'smehtaca/smehta.ca'; // used for pulling github issues and offering comments
export const SITE_TITLE = 'Sameer Mehta';
export const SITE_DESCRIPTION = "Sameer Mehta's Personal Website";
export const DEFAULT_OG_IMAGE =
	'https://avatars.githubusercontent.com/u/10327030?v=4';
export const POST_CATEGORIES = ['Essay', 'Note']; // Other categories you can consider adding: Talks, Tutorials, Snippets, Podcasts, Notes...
export const GH_PUBLISHED_TAGS = ['Published'];

// auto generated variables
export const REPO_URL = 'https://github.com/' + GH_USER_REPO;
export const REPO_OWNER = GH_USER_REPO.split('/')[0];

// dont forget process.env.GH_TOKEN
// if supplied, raises rate limit from 60 to 5000
// https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting
