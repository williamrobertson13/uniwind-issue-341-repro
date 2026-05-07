import { Pressable, Text, View } from 'react-native';

import { copy359 } from '../generated/copy/copy359';
import { layout359 } from '../generated/layouts/layout359';
import { palette359 } from '../generated/palettes/palette359';

export function Screen359() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout359.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy359.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy359.detail} / {palette359.name}
			</Text>
		</View>
	);
}
