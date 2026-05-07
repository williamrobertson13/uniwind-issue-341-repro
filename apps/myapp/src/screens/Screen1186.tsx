import { Pressable, Text, View } from 'react-native';

import { copy1186 } from '../generated/copy/copy1186';
import { layout1186 } from '../generated/layouts/layout1186';
import { palette1186 } from '../generated/palettes/palette1186';

export function Screen1186() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout1186.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1186.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1186.detail} / {palette1186.name}
			</Text>
		</View>
	);
}
