import { Pressable, Text, View } from 'react-native';

import { copy115 } from '../generated/copy/copy115';
import { layout115 } from '../generated/layouts/layout115';
import { palette115 } from '../generated/palettes/palette115';

export function Screen115() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout115.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy115.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy115.detail} / {palette115.name}
			</Text>
		</View>
	);
}
