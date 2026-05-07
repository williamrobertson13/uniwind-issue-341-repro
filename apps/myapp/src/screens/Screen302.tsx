import { Pressable, Text, View } from 'react-native';

import { copy302 } from '../generated/copy/copy302';
import { layout302 } from '../generated/layouts/layout302';
import { palette302 } from '../generated/palettes/palette302';

export function Screen302() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout302.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy302.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy302.detail} / {palette302.name}
			</Text>
		</View>
	);
}
