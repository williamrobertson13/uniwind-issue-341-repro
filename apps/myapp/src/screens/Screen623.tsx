import { Pressable, Text, View } from 'react-native';

import { copy623 } from '../generated/copy/copy623';
import { layout623 } from '../generated/layouts/layout623';
import { palette623 } from '../generated/palettes/palette623';

export function Screen623() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout623.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy623.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy623.detail} / {palette623.name}
			</Text>
		</View>
	);
}
