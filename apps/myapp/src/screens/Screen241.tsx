import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy241 } from '../generated/copy/copy241';
import { layout241 } from '../generated/layouts/layout241';
import { palette241 } from '../generated/palettes/palette241';

const RuntimeView241 = withUniwind(View);

export function Screen241() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView241 styleClassName={layout241.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy241.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy241.detail} / {palette241.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
