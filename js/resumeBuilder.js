function inName(name) {
	name = name.trim().split(" ");
//	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

bio.display = function () {
	var name = HTMLheaderName.replace("%data%", inName("Pat Condon"));
	var role = HTMLheaderRole.replace("%data%", "Project Manager");
	$("#header").append(name + role);

	$("#header").append(HTMLtopContactsStart);
	var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var email = HTMLemail.replace("%data%", bio.contacts.email);
	var github = HTMLgithub.replace("%data%", bio.contacts.github);
	var mylocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var linkedin = HTMLLinkedin.replace("%data%", bio.contacts.linkedin);
	var contacts = mobile + email + github + linkedin + mylocation;

	$("#topContacts").append(contacts);
	$("#footerContacts").append(contacts);

	var photo = HTMLbioPic.replace("%data%", bio.biopic);
	var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(photo + welcomeMessage);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (var i = 0; i < bio.skills.length; i++) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills:last").append(formattedSkill);
		}
	}
};

work.display = function () {
	for (var i = 0; i < work.jobs.length; i++) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		$(".work-entry:last").append(formattedEmployerTitle + formattedLocation + formattedDates + formattedDescription);
	}
};

projects.display = function () {
	for (var i = 0; i < projects.projects.length; i++) {
		$("#projects").append(HTMLprojectStart);
		var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		projectTitle = projectTitle.replace("#", projects.projects[i].link);
		var projectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		var projectImage = "";
		for (var j = 0; j < projects.projects[i].images.length; j++) {
			projectImage += HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
		}
		$(".project-entry:last").append(projectTitle + projectDates + projectDescription + projectImage);
	}
};

education.display = function () {
	for (var i = 0; i < education.schools.length; i++) {
		$("#education").append(HTMLschoolStart);
		var schoolName = HTMLschoolName.replace("%data%",education.schools[i].name);
		schoolName = schoolName.replace("#",education.schools[i].url);
		var schoolDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
		var schoolDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
		var schoolLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
		var schoolMajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors);
		$(".education-entry:last").append(schoolName + schoolDegree + schoolDates + schoolLocation+ schoolMajor)
	}

	$("#education").append(HTMLonlineClasses);
	for (var j = 0; j < education.onlineCourses.length; j++) {
		$("#education").append(HTMLschoolStart);
		var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
		onlineTitle = onlineTitle.replace("#", education.onlineCourses[j].url);
		var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
		var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
		var onlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
		$(".education-entry:last").append(onlineTitle + onlineSchool + onlineDates + onlineURL);
	}
};


// $("#mapDiv").append(internationalizeButton);
$("#mapDiv").append(googleMap);


//
// Render
//------------------------------
bio.display();
work.display();
projects.display();
education.display();