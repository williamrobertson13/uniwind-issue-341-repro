import { Pressable, Text, View } from 'react-native';

import { copy1035 } from '../generated/copy/copy1035';
import { layout1035 } from '../generated/layouts/layout1035';
import { palette1035 } from '../generated/palettes/palette1035';

export function Screen1035() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout1035.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy1035.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1035.detail} / {palette1035.name}
			</Text>
		</View>
	);
}
