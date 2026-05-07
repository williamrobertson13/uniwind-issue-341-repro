import { Pressable, Text, View } from 'react-native';

import { copy669 } from '../generated/copy/copy669';
import { layout669 } from '../generated/layouts/layout669';
import { palette669 } from '../generated/palettes/palette669';

export function Screen669() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout669.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy669.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy669.detail} / {palette669.name}
			</Text>
		</View>
	);
}
