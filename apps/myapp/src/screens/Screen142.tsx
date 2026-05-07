import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy142 } from '../generated/copy/copy142';
import { layout142 } from '../generated/layouts/layout142';
import { palette142 } from '../generated/palettes/palette142';

const RuntimeView142 = withUniwind(View);

export function Screen142() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView142 styleClassName={layout142.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy142.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy142.detail} / {palette142.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
