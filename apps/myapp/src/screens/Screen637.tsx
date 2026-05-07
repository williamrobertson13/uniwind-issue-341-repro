import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy637 } from '../generated/copy/copy637';
import { layout637 } from '../generated/layouts/layout637';
import { palette637 } from '../generated/palettes/palette637';

const RuntimeView637 = withUniwind(View);

export function Screen637() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView637 styleClassName={layout637.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy637.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy637.detail} / {palette637.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
