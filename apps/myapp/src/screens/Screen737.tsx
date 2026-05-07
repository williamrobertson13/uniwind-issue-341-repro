import { Pressable, Text, View } from 'react-native';

import { copy737 } from '../generated/copy/copy737';
import { layout737 } from '../generated/layouts/layout737';
import { palette737 } from '../generated/palettes/palette737';

export function Screen737() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout737.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy737.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy737.detail} / {palette737.name}
			</Text>
		</View>
	);
}
