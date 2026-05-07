import { Pressable, Text, View } from 'react-native';

import { copy515 } from '../generated/copy/copy515';
import { layout515 } from '../generated/layouts/layout515';
import { palette515 } from '../generated/palettes/palette515';

export function Screen515() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout515.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy515.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy515.detail} / {palette515.name}
			</Text>
		</View>
	);
}
