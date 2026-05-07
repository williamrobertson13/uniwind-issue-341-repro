import { Pressable, Text, View } from 'react-native';

import { copy156 } from '../generated/copy/copy156';
import { layout156 } from '../generated/layouts/layout156';
import { palette156 } from '../generated/palettes/palette156';

export function Screen156() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout156.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy156.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy156.detail} / {palette156.name}
			</Text>
		</View>
	);
}
