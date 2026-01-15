import { storeToRefs } from 'pinia';
import { computed } from 'vue';

import avatarImg from '@/assets/img/ronnie-radke-img.png';
import { useUserStore } from '@/stores/user';

export const useUserData = () => {

  const userStore = useUserStore();
  const { user } = storeToRefs(userStore);

  // Only for the test assignment; in real cases we receive the image URL.
  const avatarImages: Record<string, string> = {
    'ronnie-radke-img.png': avatarImg,
  };

  const fullName = computed(() => `${user.value?.firstName || ''} ${user.value?.lastName || ''}`);
  const avatarUrl = computed(() => avatarImages[user.value?.avatarUrl ?? '']);

  return {
    fullName,
    avatarUrl,
  };
};
