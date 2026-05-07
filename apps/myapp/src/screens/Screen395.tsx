import { Pressable, Text, View } from 'react-native';

import { copy395 } from '../generated/copy/copy395';
import { layout395 } from '../generated/layouts/layout395';
import { palette395 } from '../generated/palettes/palette395';

export function Screen395() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout395.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy395.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy395.detail} / {palette395.name}
			</Text>
		</View>
	);
}
