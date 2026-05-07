import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy502 } from '../generated/copy/copy502';
import { layout502 } from '../generated/layouts/layout502';
import { palette502 } from '../generated/palettes/palette502';

const RuntimeView502 = withUniwind(View);

export function Screen502() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView502 styleClassName={layout502.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy502.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy502.detail} / {palette502.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
