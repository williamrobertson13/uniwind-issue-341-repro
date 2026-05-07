import { Pressable, Text, View } from 'react-native';

import { copy885 } from '../generated/copy/copy885';
import { layout885 } from '../generated/layouts/layout885';
import { palette885 } from '../generated/palettes/palette885';

export function Screen885() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout885.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy885.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy885.detail} / {palette885.name}
			</Text>
		</View>
	);
}
