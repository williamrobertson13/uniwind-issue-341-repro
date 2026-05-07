import { Pressable, Text, View } from 'react-native';

import { copy21 } from '../generated/copy/copy21';
import { layout21 } from '../generated/layouts/layout21';
import { palette21 } from '../generated/palettes/palette21';

export function Screen21() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout21.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy21.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy21.detail} / {palette21.name}
			</Text>
		</View>
	);
}
