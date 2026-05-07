import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy432 } from '../generated/copy/copy432';
import { layout432 } from '../generated/layouts/layout432';
import { palette432 } from '../generated/palettes/palette432';

const RuntimeView432 = withUniwind(View);

export function Screen432() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView432 styleClassName={layout432.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy432.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy432.detail} / {palette432.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
