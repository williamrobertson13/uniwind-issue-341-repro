import { Pressable, Text, View } from 'react-native';

import { copy938 } from '../generated/copy/copy938';
import { layout938 } from '../generated/layouts/layout938';
import { palette938 } from '../generated/palettes/palette938';

export function Screen938() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout938.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy938.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy938.detail} / {palette938.name}
			</Text>
		</View>
	);
}
