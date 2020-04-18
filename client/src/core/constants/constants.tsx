import * as React from 'react';
import {
	CSharpIcon,
	SQLServerIcon,
	ReactJSIcon,
	NodeJSIcon,
	MongoDBIcon,
	NETCoreIcon,
	JavaScriptIcon,
	TypeScriptIcon,
	GitIcon,
	ReduxIcon,
	PostgreSQLIcon,
	JenkinsCIIcon,
	StyledComponentsIcon,
	JestIcon,
	SeleniumIcon,
	PythonIcon,
	GoIcon,
	WebpackIcon,
	RollupIcon,
	GatsbyIcon,
} from '@nickjmorrow/react-component-library';
import { About } from '../../modules/About/About';
import { Skills } from '../../modules/Skills/Skills';
import { Projects } from '../../modules/Projects/Projects';
import { Contact } from '../../modules/Contact/Contact';
import { Experiences } from '../../modules/Experiences/Experiences';

export const INITIAL_DELAY = 100;

const INCREMENTAL_DELAY = 100;

const APP_BAR_APPEARS = INITIAL_DELAY;
const APP_BAR_DELAY = 400;
const ABOUT_APPEARS = APP_BAR_APPEARS + APP_BAR_DELAY + INCREMENTAL_DELAY;
const SKILLS_APPEARS = ABOUT_APPEARS + INCREMENTAL_DELAY;
const EXPERIENCE_APPEARS = SKILLS_APPEARS + INCREMENTAL_DELAY;
const WORK_APPEARS = EXPERIENCE_APPEARS + INCREMENTAL_DELAY;
const CONTACT_APPEARS = WORK_APPEARS + INCREMENTAL_DELAY;
const RESUME_APPEARS = CONTACT_APPEARS + INCREMENTAL_DELAY;
const HEADLINE_APPEARS = RESUME_APPEARS + INCREMENTAL_DELAY;
const GET_IN_TOUCH_APPEARS = HEADLINE_APPEARS + INCREMENTAL_DELAY;
const DOWN_ARROW_ICON_APPEARS = GET_IN_TOUCH_APPEARS + INCREMENTAL_DELAY;
const CONTACT_NAME_APPEARS = CONTACT_APPEARS + INCREMENTAL_DELAY;
const CONTACT_EMAIL_APPEARS = CONTACT_NAME_APPEARS + INCREMENTAL_DELAY;
const CONTACT_MESSAGE_APPEARS = CONTACT_EMAIL_APPEARS + INCREMENTAL_DELAY;
const CONTACT_SEND_MESSAGE_APPEARS = CONTACT_MESSAGE_APPEARS + INCREMENTAL_DELAY;

export const enterTimeout = {
	appBarAppears: APP_BAR_APPEARS,
	aboutAppears: ABOUT_APPEARS,
	skillsAppears: SKILLS_APPEARS,
	experienceAppears: EXPERIENCE_APPEARS,
	workAppears: WORK_APPEARS,
	contactAppears: CONTACT_APPEARS,
	resumeAppears: RESUME_APPEARS,
	headlineAppears: HEADLINE_APPEARS,
	getInTouchAppears: GET_IN_TOUCH_APPEARS,
	downArrowIconAppears: DOWN_ARROW_ICON_APPEARS,
	contactNameAppears: CONTACT_NAME_APPEARS,
	contactEmailAppears: CONTACT_EMAIL_APPEARS,
	contactMessageAppears: CONTACT_MESSAGE_APPEARS,
	contactSendMessageAppears: CONTACT_SEND_MESSAGE_APPEARS,
};

export const FOOTER_HEIGHT = '42px';

export const NUM_FEATURED_PROJECTS = 3;

export enum SkillLevel {
	Proficient = 1,
	Familiar = 2,
}

export const accentColors = {
	colorOne: 'hsl(179.7, 100%, 50%)',
	colorTwo: 'hsl(276.7, 100%, 50%)',
};

export const components = [
	{
		component: <About />,
		label: 'About',
		route: '#about',
		enterTimeout: enterTimeout.aboutAppears,
	},
	{
		component: <Experiences />,
		label: 'Experience',
		route: '#experience',
		enterTimeout: enterTimeout.experienceAppears,
	},
	{
		component: <Projects />,
		label: 'Work',
		route: '#work',
		enterTimeout: enterTimeout.workAppears,
	},
	{
		component: <Contact />,
		label: 'Contact',
		route: '#contact',
		enterTimeout: enterTimeout.contactAppears,
	},
];

const iconSizeVariant = 3;

export const OVERRIDE_DESKTOP_SIZE = false;

export const moduleHeight = '75vh';

export const iconMap = {
	'C#': <CSharpIcon sizeVariant={iconSizeVariant} />,
	'SQL Server': <SQLServerIcon sizeVariant={iconSizeVariant} />,
	React: <ReactJSIcon sizeVariant={iconSizeVariant} />,
	'Node.js': <NodeJSIcon sizeVariant={iconSizeVariant} />,
	MongoDB: <MongoDBIcon sizeVariant={iconSizeVariant} />,
	'.NET Core': <NETCoreIcon sizeVariant={iconSizeVariant} />,
	JavaScript: <JavaScriptIcon sizeVariant={iconSizeVariant} />,
	TypeScript: <TypeScriptIcon sizeVariant={iconSizeVariant} />,
	Git: <GitIcon sizeVariant={iconSizeVariant} />,
	Redux: <ReduxIcon sizeVariant={iconSizeVariant} />,
	PostgreSQL: <PostgreSQLIcon sizeVariant={iconSizeVariant} />,
	'Jenkins CI': <JenkinsCIIcon sizeVariant={iconSizeVariant} />,
	'Styled Components': <StyledComponentsIcon style={{ fontSize: '22px' }} />,
	Jest: <JestIcon sizeVariant={iconSizeVariant} />,
	Selenium: <SeleniumIcon sizeVariant={iconSizeVariant} />,
	'REST Services': <JestIcon sizeVariant={iconSizeVariant} />,
	Python: <PythonIcon sizeVariant={iconSizeVariant} />,
	Go: <GoIcon sizeVariant={iconSizeVariant} />,
	Webpack: <WebpackIcon sizeVariant={iconSizeVariant} />,
	Rollup: <RollupIcon sizeVariant={iconSizeVariant} />,
	Gatsby: <GatsbyIcon sizeVariant={iconSizeVariant} />,
};
