import { Pressable, Text, View } from 'react-native';

import { copy977 } from '../generated/copy/copy977';
import { layout977 } from '../generated/layouts/layout977';
import { palette977 } from '../generated/palettes/palette977';

export function Screen977() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout977.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy977.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy977.detail} / {palette977.name}
			</Text>
		</View>
	);
}
