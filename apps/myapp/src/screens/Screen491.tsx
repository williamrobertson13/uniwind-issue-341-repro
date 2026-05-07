import { Pressable, Text, View } from 'react-native';

import { copy491 } from '../generated/copy/copy491';
import { layout491 } from '../generated/layouts/layout491';
import { palette491 } from '../generated/palettes/palette491';

export function Screen491() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout491.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy491.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy491.detail} / {palette491.name}
			</Text>
		</View>
	);
}
