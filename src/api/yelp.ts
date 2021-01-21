import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer vT-qlTgnJ6qbJ2M--eUboWdykZBkVB8LsozobvPa3IA-Nxh-SKqDY9f3aG6Pm8qkTFUw3uwJzu4IEyp73EoMOdMVKKxVwTgarbt1mCeHaisutg0CPWzj1NgSc2EYX3Yx',
  },
});
