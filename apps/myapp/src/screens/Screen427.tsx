import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy427 } from '../generated/copy/copy427';
import { layout427 } from '../generated/layouts/layout427';
import { palette427 } from '../generated/palettes/palette427';

const RuntimeView427 = withUniwind(View);

export function Screen427() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView427 styleClassName={layout427.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy427.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy427.detail} / {palette427.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
