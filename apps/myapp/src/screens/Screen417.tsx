import { Pressable, Text, View } from 'react-native';

import { copy417 } from '../generated/copy/copy417';
import { layout417 } from '../generated/layouts/layout417';
import { palette417 } from '../generated/palettes/palette417';

export function Screen417() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout417.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy417.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy417.detail} / {palette417.name}
			</Text>
		</View>
	);
}
