import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy888 } from '../generated/copy/copy888';
import { layout888 } from '../generated/layouts/layout888';
import { palette888 } from '../generated/palettes/palette888';

const RuntimeView888 = withUniwind(View);

export function Screen888() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView888 styleClassName={layout888.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy888.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy888.detail} / {palette888.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
