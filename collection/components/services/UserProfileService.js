export class UserProfileService {
  getInfo(uid) {
    return Promise.resolve({
      id: uid,
      displayName: "Leblanc Meneses"
    });
  }
}
