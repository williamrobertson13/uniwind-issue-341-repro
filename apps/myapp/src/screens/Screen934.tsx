import { Pressable, Text, View } from 'react-native';

import { copy934 } from '../generated/copy/copy934';
import { layout934 } from '../generated/layouts/layout934';
import { palette934 } from '../generated/palettes/palette934';

export function Screen934() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout934.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy934.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy934.detail} / {palette934.name}
			</Text>
		</View>
	);
}
