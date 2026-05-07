import { Pressable, Text, View } from 'react-native';

import { copy107 } from '../generated/copy/copy107';
import { layout107 } from '../generated/layouts/layout107';
import { palette107 } from '../generated/palettes/palette107';

export function Screen107() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout107.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy107.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy107.detail} / {palette107.name}
			</Text>
		</View>
	);
}
