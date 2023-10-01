// import $ from 'jquery'; // Import jQuery
// import * as components from './components';
// import * as api from './api';


// // ___ will be replace with the search result display js file once team members
// // is done with it

// interface Config {
//   [key: string]: string;
// }

// interface App {
//   user: {
//     uid: number;
//   };
// }

// interface Utils {
//   params(): string[];
// }

// declare const config: Config;
// declare const app: App;
// declare const utils: Utils;
// declare const ajaxify: any; // Replace with the correct type

// const module: any = {};

// module.handleSort = function (field: string, gotoOnSave: string) {
//     const threadSort = components.get('searchResult/sort');
//     threadSort.find('i').removeClass('fa-check');
//     const currentSetting = threadSort.find(`a[data-sort="${config[field]}"]`);
//     currentSetting.find('i').addClass('fa-check');

//     $('body')
//         .off('click', '[component="searchResult/sort"] a')
//         .on('click', '[component="searchResult/sort"] a', function () {
//             function refresh(newSetting: string, par: string[]) {
//                 config[field] = newSetting;
//                 const qs = decodeURIComponent($.param(par));
//                 ajaxify.go(gotoOnSave + (qs ? '?' + qs : ''));
//             }
//             const newSetting = $(this).attr('data-sort');
//             if (app.user.uid) {
//                 const payload = { settings: {} };
//                 payload.settings[field] = newSetting;
//                 api.put(`/users/${app.user.uid}/settings`, payload).then(() => {
//                     // Yes, this is normal. If you are logged in, sort is not
//                     // added to qs since it's saved to user settings
//                     refresh(newSetting, utils.params());
//                 });
//             } else {
//                 const urlParams = utils.params();
//                 // urlParams.sort = newSetting;
//                 refresh(newSetting, urlParams);
//             }
//         });
// };

// export default module;
