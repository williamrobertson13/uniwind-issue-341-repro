import { Pressable, Text, View } from 'react-native';

import { copy263 } from '../generated/copy/copy263';
import { layout263 } from '../generated/layouts/layout263';
import { palette263 } from '../generated/palettes/palette263';

export function Screen263() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout263.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy263.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy263.detail} / {palette263.name}
			</Text>
		</View>
	);
}
