import { Pressable, Text, View } from 'react-native';

import { copy1171 } from '../generated/copy/copy1171';
import { layout1171 } from '../generated/layouts/layout1171';
import { palette1171 } from '../generated/palettes/palette1171';

export function Screen1171() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout1171.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy1171.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1171.detail} / {palette1171.name}
			</Text>
		</View>
	);
}
