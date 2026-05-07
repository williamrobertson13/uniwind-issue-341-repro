import { Pressable, Text, View } from 'react-native';

import { copy41 } from '../generated/copy/copy41';
import { layout41 } from '../generated/layouts/layout41';
import { palette41 } from '../generated/palettes/palette41';

export function Screen41() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout41.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy41.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy41.detail} / {palette41.name}
			</Text>
		</View>
	);
}
