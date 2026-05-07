import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy240 } from '../generated/copy/copy240';
import { layout240 } from '../generated/layouts/layout240';
import { palette240 } from '../generated/palettes/palette240';

const RuntimeView240 = withUniwind(View);

export function Screen240() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView240 styleClassName={layout240.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy240.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy240.detail} / {palette240.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
