import post from './post';
import upload from './upload';
import user from './user';
import subscription from './subscription';
import contact from './contact';
import pageNotFound from './pageNotFound';
import './favicon';

import Feature from './connector';

export default new Feature(post, upload, user, subscription, contact, pageNotFound);
