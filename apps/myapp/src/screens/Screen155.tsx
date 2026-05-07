import { Pressable, Text, View } from 'react-native';

import { copy155 } from '../generated/copy/copy155';
import { layout155 } from '../generated/layouts/layout155';
import { palette155 } from '../generated/palettes/palette155';

export function Screen155() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout155.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy155.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy155.detail} / {palette155.name}
			</Text>
		</View>
	);
}
