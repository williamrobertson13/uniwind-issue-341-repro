import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy231 } from '../generated/copy/copy231';
import { layout231 } from '../generated/layouts/layout231';
import { palette231 } from '../generated/palettes/palette231';

const RuntimeView231 = withUniwind(View);

export function Screen231() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView231 styleClassName={layout231.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy231.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy231.detail} / {palette231.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
