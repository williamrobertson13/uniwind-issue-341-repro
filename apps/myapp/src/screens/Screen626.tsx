import { Pressable, Text, View } from 'react-native';

import { copy626 } from '../generated/copy/copy626';
import { layout626 } from '../generated/layouts/layout626';
import { palette626 } from '../generated/palettes/palette626';

export function Screen626() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout626.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy626.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy626.detail} / {palette626.name}
			</Text>
		</View>
	);
}
