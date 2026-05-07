import { Pressable, Text, View } from 'react-native';

import { copy134 } from '../generated/copy/copy134';
import { layout134 } from '../generated/layouts/layout134';
import { palette134 } from '../generated/palettes/palette134';

export function Screen134() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout134.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy134.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy134.detail} / {palette134.name}
			</Text>
		</View>
	);
}
