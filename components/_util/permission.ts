import Expo from 'expo';
export async function ensureHasPermission(type:string) {
    const { status } = await Expo.Permissions.getAsync(type);
    if (status !== 'granted') {
      await Expo.Permissions.askAsync(type)
    }
    return
}