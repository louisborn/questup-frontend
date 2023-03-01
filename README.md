<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="https://github.com/louisborn/questup-frontend/blob/main/logo.PNG" alt="Logo" width="50%" height="50%">
  </a>

<h3 align="center">QuestUP</h3>

  <p align="center">
    A web application to motivate middle school students to engage with learning materials.
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
      <ul>
        <li><a href="#architecture">Architecture</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#screenshots">Screenshots</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About the Project

QuestUP is a web application to motivate middle school students to engage with learning materials even after the school time. The final subject grade (displayed to the students as a level) is predicted using ML techniques based on the students performance. By completing "Quests" students can receive points. With sufficient points, shop items are automatically unlocked which then can be purchased by the students. 

This project was submited as a final project for  Learning Analytics course under [Social Computing department](https://www.uni-due.de/soco/) at [Duisburg-Essen University](https://www.uni-due.de).



### Built With

* [![Angular][Angular.io]][Angular-url]
* ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
* ![Plotly](https://img.shields.io/badge/Plotly-%233F4F75.svg?style=for-the-badge&logo=plotly&logoColor=white)

For libraries/algorithms used in the backend refere to our [questup-api repository](https://github.com/louisborn/questup-api).


### Architecture
<img src="https://github.com/louisborn/questup-frontend/blob/main/architecture.PNG" alt="architecture" width="100%" height="100%">


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
* Angular CLI
  ```sh
  npm install -g @angular/cli
  ```
* Tailwindcss
  ```sh
  npm install -D tailwindcss
  ```
* Plotly.js
  ```sh
  npm i --save plotly.js-dist-min
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/louisborn/questup-frontend.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the app
   ```sh
   ng serve
   ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Screenshots

<img src="https://github.com/louisborn/questup-frontend/blob/main/questup_dashboard.PNG" alt="dashboard" width="100%" height="100%">
<img src="https://github.com/louisborn/questup-frontend/blob/main/questup_quest.PNG" alt="quest" width="100%" height="100%">
<img src="https://github.com/louisborn/questup-frontend/blob/main/questup_store.PNG" alt="store" width="100%" height="100%">
<img src="https://github.com/louisborn/questup-frontend/blob/main/questup_scores.PNG" alt="scores" width="100%" height="100%">
<img src="https://github.com/louisborn/questup-frontend/blob/main/questup_lvl_calc.PNG" alt="level calc" width="100%" height="100%">
<img src="https://github.com/louisborn/questup-frontend/blob/main/questup_lvl_result.PNG" alt="level result" width="100%" height="100%">

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Authors

- [@louisborn](https://github.com/louisborn)
- [@jordyhz](https://github.com/jordyhz)
- [@ingasun](https://github.com/ingasun)
- [@nigoss89](https://github.com/nigoss89)



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
 - [Tailwindcss](https://tailwindcss.com/)
 - [Plotly.js](https://plotly.com/javascript/)
 - [Angular](https://angular.io/)
 - [Learning Analytics by Prof. Dr. Mohamed Amine Chatti](https://ude-soco.github.io/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
