window.SecAds = Ember.Application.create();



SecAds.IndexRoute = Ember.Route.extend({
  model: function(params) {
  }
});

SecAds.AdventuresRoute = Ember.Route.extend({
  model: function(params) {
    return [
      {
        trip: "Bhutan, Cambodia & Thailand - Winter 2014",
        url: "http://girodichatterbox.blogspot.com/2015/01/bhutan-cambodia-and-thailand-december.html", 
        description: "Trekking, cycling and cultural touring. My first trip to Asia."
      },
      {
        trip: "Ireland, Spring 2014",
        url: "http://girodichatterbox.blogspot.com/2014/06/irelands-wiclow-way-may-2014.html", 
        description: "Dublin city + Trekking the Wicklow Way."
      },
      {
        trip: "Santa Fe, Fall 2013",
        url: "http://girodichatterbox.blogspot.com/2013/10/exploring-new-places-with-girlfriends.html", 
        description: "Hiking and cultural touring with my girl friends."
      },
      {
        trip: "Glacier and Tetons, Summer 2013",
        url: "http://www.flickr.com/photos/28539052@N03/sets/72157634480230751/", 
        description: "Very long day hikes in the mountains."
      },
      {
        trip: "Peru, Fall 2012",
        url: "http://www.secadvertising.com/peru2012", 
        description: "Lima and Arequipa cities + Colca Canyon + Andes trek + Macchu Picchu."
      },
      {
        trip: "Mexico, Riviera Maya Spring 2012",
        url: "http://www.secadvertising.com/mexico2012", 
        description: "Snorkeling and archeological touring."
      },
      {
        trip: "Vermont and Quebec, Fall 2011",
        url: "http://www.secadvertising.com/vermont2011", 
        description: "Cycle tour and hiking in Vermont. Side trip to Montreal."
      },
      {
        trip: "North Italy, Summer 2011",
        url: "http://www.secadvertising.com/vermont2011", 
        description: "Trekking across the Dolomites. Side trip to Verona + Venice."
      },
      {
        trip: "Germany, Switzerland and France, Spring 2010",
        url: "http://girodichatterbox.blogspot.com/p/sarahs-swartzwald-world-germany.html", 
        description: "Cycling tour of the Rhine region + Black Forest."
      },
      {
        trip: "Olympic Peninsula, Fall 2009",
        url: "http://www.secadvertising.com/washington_2009/", 
        description: "Circumnavigating the Olympic Peninsula by bicycle with my parents."
      },
      {
        trip: "Hawaii, Fall 2008",
        url: "http://www.secadvertising.com/hawaii_2008/", 
        description: "Snorkeling and touring the big island."
      },
      {
        trip: "Canadian Rockies, Summer 2007",
        url: "http://www.secadvertising.com/canada_07/", 
        description: "A beautiful hiking vacation to break from cycling season."
      },
      {
        trip: "Oregon and Eastern Sierra, Summer & Fall 2006",
        url: "http://www.secadvertising.com/summer_06/", 
        description: "Some fun cycling adventures from Summer 2006."
      },
      {
        trip: "France & Spain, Summer 2005",
        url: "http://www.secadvertising.com/France-Spain2005/", 
        description: "A lovely vacation cycling through the Pyrenees."
      },
      {
        trip: "Yosemite, Spring 2005",
        url: "http://www.secadvertising.com/yosemite_2005/", 
        description: "Hiking in the early Spring...aaah."
      },
      {
        trip: "Northern Italy, Summer 2004",
        url: "http://www.secadvertising.com/Italy2004/", 
        description: "Epic cycling adventure through the Alps, Dolomites and Lake Country."
      },
      {
        trip: "California Coast, Fall 2003",
        url: "http://www.secadvertising.com/santa_barbara/", 
        description: "Cycling Highway 1 from the Bay Area to Santa Barbara."
      },
      {
        trip: "Costa Rica, Winter 2003",
        url: "http://www.secadvertising.com/costa_rica/", 
        description: "A Latin America Christmas break with my best friend."
      },
      {
        trip: "Italy, Fall 2002",
        url: "http://www.secadvertising.com/costa_rica/", 
        description: "Tuscany & Umbria cycling tour + art and culture touring."
      }
    ];
  }
});

SecAds.SpeakingRoute = Ember.Route.extend({
  model: function(params) {
    return [
      {
        name: "Gross Technical Career Happiness - Keynote", 
        venue: "Defi Technovation/Technovation Challenge Kickoff Montreal", 
        description: "Through a partnership with the Montreal Chamber of Commerce, The U.S. Consolate in Montreal, and the Montreal startup community, I was invited to speak at the innagural Girls Make Apps event and gathering of the Montreal tech community.",
        url: "https://www.facebook.com/defitechnovationchallenge",
        image: "https://scontent-sjc.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/11041080_655203761274708_7544757182242307361_n.jpg?oh=361fa450cab883f7dd5b9489571ce88c&oe=55D56F30"
      },
      {
        name: "Developing Intuitive, Consistent UX Patterns Across Platforms", 
        venue: "Mobile+Web Devcon, San Francisco", 
        description: "I was invited to speak on a topic around design for developers. The talk focused around consistent usability of widgets across web and native mobile platforms.",
        url: "http://mobilewebdevconference.com/san-francisco-2015/agenda/day-three/1145am.html",
        image: "http://mobilewebdevconference.com/assets/images/mwd-header-frisco15.png"
      },
      {
        name: "Achieving Leverage for Accessibility in a Large Organization", 
        venue: "Anita Borg Institute - Grace Hopper Celebration of Women in Computing 2014", 
        description: "Most technology organizations do not consider the accessibility of their products until they emerge from the startup phase as a category leader with a large and diverse audience. At that time, significant barriers exist to gaining momentum for accessibility efforts. I will discuss my experience at LinkedIn achieving leverage for accessibility efforts through a small, interdisciplinary task force, including methods employed by the task force to achieve objectives. ",
        url: "http://gracehopper.org/2014-schedule/?subject=show_details&_year=2014&sid=2051#2051",
        image: "http://anitaborg.org/wp-content/themes/abi/library/images/header-logo.png"
      },
      {
        name: "Plenary Session: The M-Enabling 2014 Talk Show (Part 2) Media and Web Search Accessibility: The Mobile Quantum Leap", 
        venue: "M-Enabling Summit Conference & Showcase 2014", 
        description: "As a member of the plenary/keynote panel, I spoke about LinkedIn's efforts in mobile accessibility.",
        url: "http://g3ict.org/events/schedule/event_agenda/p/eventId_467/id_agenda",
        image: "http://g3ict.org/design/js/tinymce/filemanager/userfiles/Image/template/m-enabling-logo-2014.jpg"
      },
      {
        name: "Case Study on Improving accessibility without compromising user experience", 
        venue: "Annual International Technology & Persons with Disabilities Conference 2014", 
        description: "Walk through of a case study where efforts to improve accessibility impacted interaction design and how the team worked together to come a universal solution",
        url: "http://www.csun.edu/cod/conference/2014/sessions/index.php/public/presentations/view/99",
        image: "http://www.csun.edu/cod/conference/2014/sessions/app/webroot/img/logo_standard.png"
      },
      {
        name: "A Pattern Library as a Foundational Sketch for Web Accessibility Efforts", 
        venue: "Annual International Technology & Persons with Disabilities Conference 2014", 
        description: "At LinkedIn, the DaVinci UI Pattern library demonstrates accessible web patterns that designers and developers can combine into a work of art.",
        url: "http://www.csun.edu/cod/conference/2014/sessions/index.php/public/presentations/view/162",
        image: "http://www.csun.edu/cod/conference/2014/sessions/app/webroot/img/logo_standard.png"
      },
      {
        name: "Stealth Accessibility", 
        venue: "Front-End Meetup, LinkedIn Tech Talks", 
        description: "I am the WebDev in charge of LinkedIn's montetization products, and also the fearless leader of the LinkedIn Web Accessibility Task Force. In this talk I discuss how my team promotes awareness of web accessibility and organizes the execution of improving LinkedIn's accessibility for all users.",
        url: "https://www.youtube.com/watch?v=vNCG0Yh3lYo",
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUDBAgKCAgICAgICAgICAcICAgICAgIBwgICAgIBwgICAgIFhwXCAgOFQgIGBUYDh0dHx8fCBciJCAeKBweHx4BBQUFCAcIDwkJDx4RDxASFBUWEhMSFh4SFRIeEhQeGBcUFR4eEhIVHh4SGRgeHh4SHh4eHhsbEhIbEhgUGRIVHv/AABEIAFoAeAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAACAEEBQYHAwL/xAA3EAACAQMDAgMFBgQHAAAAAAABAgMABBEFEiEGMQcTIggUQVFxMkJSYZGxI2KBoSQzRpKywdH/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEBQEG/8QAJBEAAgIBAwQCAwAAAAAAAAAAAAECAxEEITESE0FRYZEUIqH/2gAMAwEAAhEDEQA/AIZUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBVakfqHs+6SrMsWq3rYOF3W0W5/lgA1Zp7PMXnJbteXMcsrokYkhRAfMYIrEn7uTzj5VcqJN4IOxIj3Sut+JXhCNLtbmZ7iczW5jBikiVAS8iR9we3qyMVplr0LfvZpehEWKQM0KM4E0yr3dIx9z64qqS6eScf24NXpXqYsHByKqsOfj/apRg5cA8arVwLb8/7V0XwX6N0HUnmt9U1O7s7rINtFbW/mCWJVLSszlSFIwO5FTtolXHqlsgt3hHMqVLi29l3QniEyatqjRFN4cRWmNuCScYz8K1298FOjov8AN1/VYxycvZqqcfzMmKzSsjHlk41ylwiNFK7/AD+G/Qa/6l1Igdz7kx/TbHzX3feFvRkKRST63rcEc67oZJtKuYo5U/FE8kQEi/Sitg+GHXJcoj9VKkRaeFXQ8kXnp1HqZj59XuYHIyCACmT2NZTpfwJ6U1ASNYazrVysTBJGSwwqMV3BSXQc4orIt4TDrkllojHSpZ6r7M/TtvbT3dxrGqxW9tDJPNI1rH6IolLu2xVy2ADwBVKmQybjLraS3EKw3MLy718vddQOm8HKnc5wAMfe+VZ3XNXitJ7Zbq4s7yX3aBxKZwfd23MpRXiPr24P+6oC+a/4m/U19CZ/xN+prVXqpQeUUTq6iWPtOmzls7gWBjKzwafMqLKpJaR4pHJyeD3z9K45Ya56gXLZht0iZV3KihYvUURPsr2x+Yrn8kzx7Y9xzkF+Sefl9BWTleJgGDnPGRk5+tRnUrd/JbS+38mM14D3iWRARHJI7ITjkE5Pb61ZIayWolSCq87QG/cGsaw4H5jP9yP+q9S7cthyeob9hW1eD0uNZtyOMpMDwScFGzhRyf6Vpxb9hXR/Zv0oXeuC1J2mSxvtrEKdrrHvjbDgjAIHevdbZ3anD4J0tRmn8kg068W0sHgRwyv5hAk8s7g4wyqOR5ffOM9+9a94MdDz69fz3d4u3RoxIpdYoVe4uMbUihnK7mVO7EH7oHxrAabpU66hape2/m2vvcJvp7iUyTXcCSgMqeVxDBjJAXvjnNTR0yyhghjgt4o4YI1CxxRIscSL8lRewr57S1Kb3eVHbB1NXd21iKw5eTQ+l/Bbp6ylWdLL3mZCCkl5I1xsIO4MsTekOMDnGa3+e3jddkiI6HujqrIR8ipqxl1+yVmRrmEOrOrLvG5WQlWBHw5Bqsuv2SkK11ApO7aDIo3bZTA235kMpBx8RXSjBRWEjlSnKW7ZzHx38OBcwx3lhbp5ltGyS28UaqZIclw0SLwZEy3HxB/IZ5p4USyaak91bOGSeVPNQjdFKkKsoGO6PmR+V/CO9SljkSWPcjB0kUgOh4IOVO0j41G/qTpbVbKeWN7PNo8m2K4gIa2w5ZzuxzCftE7wOTxnisOqrcX1w5Olo7FJduf9Nk636tttQ6c6iESvHLBpN95sb4ON9rNgqy/aX0n5UrkfWUk9nY6qYJSiXdjdW84kCmOaNoXRsDvG3q9POc9wB3pWrS3uyGZclGq0vRPEeCNNV+FfORVVIrSYsGaSzlljjuRE7xx4SVwpKIw5Xew7ZqqRxhsfZzk85xwM44+lWml6s8aiEsTbNNHLLF8HKEHn64r01G8iaV2jIWNpHdUAOEUkkKPpkfpVsLOlMlhNoyenW1vud5XjKtEVCAuGDE7TnAx2z2NXF1pNkI4pPNjIkEmI0mzLGEbH8VfuZycZrXveU/F+9V96T8X71RKcm8l/bh7Pi8strybGUou4q277ShsBR82/8raPBXW/ctXjn3iPMFzDuOMfxoygB3du9atPcIVIB5/rW4+Amp6bb61FLqphFl7vdJJ58ZljJeMqqlMHk5pLM4NcENoSTW52Wz11ZpI90jTqXVZBFFlgs3oV1VO6jDMfhhQO5qWmh6tbXEYa3lWQALkA4kXjjeh5U/Wotat4g9HQ4fTY44pFD7miCxrIDyBtLcsD2yO3FeHS/jRaJeo6z29qojkKyPIWBZWH8KYLjKuP+P0rj1qenm0llPykdG5R1EE28NeGS8pxXBNN9pTTWXMjWYI7/wCJaLJHfAYHivm89prTF5RLdwO4F5lyP5cqBXRV8X7+mc/8WefH2jvcsiKCzsqKO7MQqj6k9q4B4z9ewyvJGtwnutuSoCMCJHHBb+Y/LFaT4g+M9neru97hbOdkBcCOME4BwuefzOa5Zba7FLqkHu11ptpj1Pd3flLbxg4V3GxR5kwB9IYGs1kp2voisL2bqKq6V1yeX6LTrnqu7uYphb8WmwpO6IzbQwYpHJIRhPM2tgA/A0q4tuo9LU9Q2bsFNxBqYivLa4uIYb+4txM1m7xo20Rvz6eQTKOKVujQq1iJknqZTeWcipSlWGcUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKA/9k="
      }
    ];
  }
});

SecAds.PressRoute = Ember.Route.extend({
  model: function(params) {
    return [
      {
        name: "Seminar encourages Montreal girls to create their own apps", 
        publication: "CTV News", 
        reporter: "Kevin Gallagher",
        url: "http://montreal.ctvnews.ca/video?clipId=570502&playlistId=1.2280233&binId=1.1332485&playlistPageNum=1",
        image: "http://montreal.ctvnews.ca/polopoly_fs/1.1996568.1410187282!/httpImage/image.jpg_gen/derivatives/landscape_800/image.jpg"
      },
      {
        name: "Le Défi Technovation: la technologie, entre filles!", 
        publication: "Le Huffington Post Québec", 
        reporter: "Maxellende Pycke",
        url: "http://quebec.huffingtonpost.ca/2015/03/17/defi-technovation-montreal-technologie-filles-video-photos_n_6871498.html",
        image: "http://jerz.setonhill.edu/wp-content/uploads/2013/12/image6.jpg"
      },
      {
        name: "Celebrating Women In Tech", 
        publication: "Tech News Today", 
        reporter: "John Dewey",
        url: "http://www.technewstoday.com/21919-celebrating-women-in-tech/",
        image: "http://www.technewstoday.com/img/logo/logo.png"
      },
      {
        name: "Sarah Clatterbuck - Grace Hopper Celebration of Women in Computing (2014) - theCUBE", 
        publication: "SiliconAngle TV", 
        reporter: "Jeff Frick",
        url: "https://www.youtube.com/watch?v=_63JHK4GKCU",
        image: "http://www.siliconangle.tv/wp-content/uploads/2014/01/theCUBE_Logo.jpg"
      },
      {
        name: "10 Most Powerful Women Shining In The Tech World!", 
        publication: "EFY Times News", 
        reporter: "EFY Times News",
        url: "http://efytimes.com/e1/fullnews.asp?edid=150753",
        image: "http://www.artechinfo.in/BanasthaliOnline/EFYTimes_files/efytimes_logo.gif"
      },
      {
        name: "22 Of The Most Powerful Women Engineers In The World", 
        publication: "Business Insider", 
        reporter: "Julie Bort",
        url: "http://www.businessinsider.com/22-powerful-women-engineers-in-tech-2014-7#no-22-linkedin-sarah-clatterbuck-1",
        image: "data:image/png;base64,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"
      }, 
      {
        name: "Facebook Women's Hackathon Honors I School Students", 
        publication: "UC Berkeley School of Information", 
        reporter: "Arezu Aghaseyedjavadi, Ruchita Rathi, Ankita Bhosle, and Sufia Siddiqui",
        url: "http://www.ischool.berkeley.edu/newsandevents/news/20140410facebookhackathon",
        image: "http://www.ischool.berkeley.edu/sites/all/themes/ischool2008/ischool2008/images/logo_home.jpg"
      }, 
      {
        name: "When Litter and Graffiti Overtook Their Neighborhood, These Teens Invented an App", 
        publication: "Nation Swell", 
        reporter: "Ricardo Hernandez",
        url: "http://nationswell.com/teens-app-tag-it-cleaner-neighborhood/",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTd-zYTiyr-ZfLszZmLEuPor1Nci6MRMIQ4A3aUrfLwhQcgKwCTJRZ7ckq8"
      },
      {
        name: "December 2013 Site of the Month", 
        publication: "American Library Association", 
        reporter: "Rebecca Maniates, Yale-NUS College",
        url: "http://www.ala.org/acrl/aboutacrl/directoryofleadership/sections/is/iswebsite/projpubs/primo/site/2013december",
        image: "http://www.b2bmarketing.net/sites/all/themes/sitetheme/images/logo.gif"
      },
      {
        name: "SOCIAL NEWS: LinkedIn announces accessibility enhancements", 
        publication: "B2B Marketing", 
        reporter: "B2B Marketing",
        url: "http://www.b2bmarketing.net/news/archive/social-news-linkedin-announces-accessibility-enhancements",
        image: "http://www.ala.org/acrl/files/aboutacrl/directoryofleadership/sections/is/admin/imgs/color_Primo.gif"
      }, 
      {
        name: "LinkedIn Adds Accessibility Features", 
        publication: "WebProNews", 
        reporter: "Chris Crum",
        url: "http://www.webpronews.com/linkedin-adds-accessibility-features-2013-05",
        image: "http://www.seoinc.com/seo-blog/wp-content/uploads/2012/10/300x71xweb-pro-news-300x71.png.pagespeed.ic.rk2pdtXgS5.jpg"
      },
      {
        name: "East Palo Alto girls create app to clean up graffiti, trash", 
        publication: "Palo Alto Weekly", 
        reporter: "Elena Kadvany",
        url: "http://www.paloaltoonline.com/news/2013/05/11/east-palo-alto-girls-create-app-to-clean-up-graffiti-trash-",
        image: "http://paloaltoonline.com/art/top_logo.png"
      }
    ];
  }
});


SecAds.Router.map(function() {
  this.resource('speaking');
  this.resource('writing');
  this.resource('press');
  this.resource('engineering');
  this.resource('design');
  this.resource('adventures');
  /*this.resource('photos');
  this.resource('photo', { path: 'photos/:id' });
  this.resource('add');*/
});



