import { Pressable, Text, View } from 'react-native';

import { copy899 } from '../generated/copy/copy899';
import { layout899 } from '../generated/layouts/layout899';
import { palette899 } from '../generated/palettes/palette899';

export function Screen899() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout899.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy899.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy899.detail} / {palette899.name}
			</Text>
		</View>
	);
}
